# Query

```graphql
# Write your query or mutation here

query testPosts {
  posts {
    id
    text
    comments {
      id
      text
    }
  }
}

query testComments {
  comments {
    id
    text
  }
}

mutation updateComment($updateCommentArgs: updateCommentArgs!) {
  updateComment(args: $updateCommentArgs) {
    id
    text
  }
}
```


# Query Variables

```json
{
  "updateCommentArgs": {
    "id": 2,
    "text": "new text"
  } 
}
```
