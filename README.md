# graphql

- best resource - https://graphql.org/learn/

## GQL usage

1. transport data
   - read data from server (query)
   - request changes to data (mutate)

## facts

1. most common implementation transport protocol is gql-over-http
1. schema = typedefinition + resolver
   1. typedef = structure of the data
   2. resolver = how to get to the data
1. typedef and resolvers mirror each other

## http

### http request

```http
GET localhost/something HTTP/1.1
content-type: plain/text
```

```http
POST localhost/something HTTP/1.1
content-type: plain/text

some body
```

### http response

```http
HTTP/1.1 200 OK
content-type: plain/text

hello world
```
