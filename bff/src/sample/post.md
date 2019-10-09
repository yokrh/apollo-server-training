# Query

```graphql
query getPost {
  post(id: 1) {
    id
    text
  }
}

query getPosts {
  posts {
    id
    text
    comments {
      id
      text
    }
  }
}

mutation updatePost($updatePostArgs: updatePostArgs!) {
  updatePost(args: $updatePostArgs) {
    id
    text
  }
}
```


# Query Variables

```json
{
  "updatePostArgs": {
    "id": 1,
    "text": "new post text"
  } 
}
```
