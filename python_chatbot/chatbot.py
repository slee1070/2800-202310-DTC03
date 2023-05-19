import sys
import os
from dotenv import load_dotenv
from langchain import OpenAI
# from langchain.chat_models import ChatOpenAI

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
    # set maximum input size
    max_input_size = 4096
    # set number of output tokens
    num_output = 256
    # set maximum chunk overlap
    max_chunk_overlap = 20
    # set chunk size limit
    chunk_size_limit = 600

    prompt_helper = PromptHelper(max_input_size, num_output, max_chunk_overlap, chunk_size_limit=chunk_size_limit)

    # define LLM
    llm_predictor = LLMPredictor(llm=OpenAI(temperature=0, model_name="ada", max_tokens=num_output))
    # llm_predictor = LLMPredictor(llm=ChatOpenAI(temperature=0, model_name="gpt-3.5-turbo", max_tokens=num_output))

    documents = reader.load_data(db_name, collection_name, field_names, query_dict=query_dict)

    service_context = ServiceContext.from_defaults(llm_predictor=llm_predictor)
    index = GPTListIndex.from_documents(documents, service_context=service_context)

    index.storage_context.persist()

    return index

def ask_bot(index, query):

    persona_prompt = "You are the cat in Whisker's Kitchen, where the flavors of the feline world come to life! Join as the esteemed chef, Whisker the Culinary Cat, takes you on a whisker-twitching journey through delightful recipes. With step-by-step instructions guided by our feline maestro, unleash your inner chef and create purr-fectly delicious meals. Do not list any recipes unless you are asked. Only name a few recipes at a time. If I tell you what items I have in my pantry, you repeat what I have in my pantry. If I ask for recipes, suggest recipes with what I have and if I ask for more recipes, suggest other recipes. If I ask for recipe instructions, provide step-by-step instructions with a clean format. You also share some funny cat puns."
    example_conversation = """
    Example Conversation:
    User: Hi
    I am Whisker the Culinary Cat! I am here to help you create purr-fectly delicious meals with the items you have in your pantry. If you'd like, I can provide step-by-step instructions for any of these recipes, and I can also share some funny cat puns to make your cooking experience even more enjoyable!
    User: What recipes can I make with chicken and vegetables?
    With chicken and vegetables, you can try making a delicious stir-fry or a flavorful chicken and vegetable curry. Both recipes are paw-some choices for a wholesome meal. Let me know if you'd like the recipe instructions for any of these dishes!
    User: I'd love the recipe instructions for the chicken and vegetable curry.
    Fantastic! Here are the step-by-step instructions for the chicken and vegetable curry: [Provide recipe instructions]
    User: Thank you!
    You are very welcome! I hope you enjoy your meal!
    """
    prompt = persona_prompt + example_conversation + query

    storage_context = StorageContext.from_defaults(
        docstore=SimpleDocumentStore.from_persist_dir(),
        vector_store=SimpleVectorStore.from_persist_dir(),
        index_store=SimpleIndexStore.from_persist_dir(),
    )

    # load index
    index = load_index_from_storage(storage_context)

    query_engine = index.as_query_engine()
    response = query_engine.query(prompt)

    print(response.response)
    return response.response

index = construct_index("/content/")

def chat_bot(query):
    response = ask_bot(index, query)
    return response
