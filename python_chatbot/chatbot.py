import sys
import os

from dotenv import load_dotenv
from langchain import OpenAI

from llama_index.storage.docstore import SimpleDocumentStore
from llama_index.vector_stores import SimpleVectorStore
from llama_index.storage.index_store import SimpleIndexStore
from llama_index import  GPTListIndex, LLMPredictor, ServiceContext, PromptHelper, SimpleMongoReader, StorageContext, load_index_from_storage

import logging

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logging.getLogger().addHandler(logging.StreamHandler(stream=sys.stdout))

load_dotenv()

# MongoDB connection
db_name=os.getenv("MONGODB_DATABASE")
collection_name="recipeTest2"
uri = f"mongodb+srv://{os.getenv('MONGODB_USER')}:{os.getenv('MONGODB_PASSWORD')}@{os.getenv('MONGODB_CLUSTER')}/{os.getenv('MONGODB_DATABASE')}?retryWrites=true&w=majority"
query_dict = None
field_names = ["Name"]
reader = SimpleMongoReader(uri=uri)


os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")


def construct_index(directory_path):
    # Set maximum input size
    max_input_size = 4096
    # Set number of output tokens
    num_output = 256
    # Set maximum chunk overlap
    max_chunk_overlap = 20
    # Set chunk size limit
    chunk_size_limit = 600

    prompt_helper = PromptHelper(max_input_size, num_output, max_chunk_overlap, chunk_size_limit=chunk_size_limit)

    # Define LLM
    llm_predictor = LLMPredictor(llm=OpenAI(temperature=0, model_name="ada", max_tokens=num_output))

    documents = reader.load_data(db_name, collection_name, field_names, query_dict=query_dict)

    service_context = ServiceContext.from_defaults(llm_predictor=llm_predictor)
    index = GPTListIndex.from_documents(documents, service_context=service_context)

    index.storage_context.persist()

    return index


def ask_bot(index, query, persona_prompt, example_conversation):

    prompt = persona_prompt + example_conversation + query

    storage_context = StorageContext.from_defaults(
        docstore=SimpleDocumentStore.from_persist_dir(),
        vector_store=SimpleVectorStore.from_persist_dir(),
        index_store=SimpleIndexStore.from_persist_dir(),
    )

    # Load index
    index = load_index_from_storage(storage_context)

    query_engine = index.as_query_engine()
    response = query_engine.query(prompt)

    print(response.response)
    return response.response


index = construct_index("/content/")


def chat_bot(query, persona_prompt, example_conversation):
    response = ask_bot(index, query, persona_prompt, example_conversation)
    return response
