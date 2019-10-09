# Query

```graphql
# Write your query or mutation here

query getComment {
  comment(id: 1) {
    id
    text
  }
}

query getComments {
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
    "text": "new text2"
  } 
}
```
