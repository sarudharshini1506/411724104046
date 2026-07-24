from fastapi import APIRouter

router = APIRouter()
@router.get("/users")
def get_users():
    return {"message": "Hello World"}
@router.post("/users/post")
def post_users():
    return {"message": "Hello World"} 
@router.patch("/users/patch")
def patch_users():
    return {"message": "Hello World"}
@router.put("/users/put")
def put_users(id):
    return "put Data"+id
@router.delete("/users/delete")
def delete_users():
    return {"message": "Hello World"}