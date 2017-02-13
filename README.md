# ApiRestClient

ApiRestClient is a simple Lib to talk with API Rest.

  - Use Httpful Rest Client Lib (http://phphttpclient.com/)
  - Use most popular HTTP methods (GET/POST/UPDATE/DELETE)
  - Do CRUD operations

Examples with CURL:

curl -i -X POST "https://api.,,,,/v0/entries" -H "Authorization: Token token=XxxXXxxXxXXX" -H "Content-Type: application/json" -d '
{
    "title": "Escritório com 250m2 no Marquês",
    "description": "Fabuloso escritório com 250m2 no centro de Lisboa com ótimos acessos...",
    "type_id": "sell",
    "category_id": 1020,
    "image_ids": [13123123, 3123123, 231232, 2345356, 7867867],
    "location": {
        "region_id": 14,
        "zipcode": "1000",
        "area_id": 220
    },
    "partner_info": {
        "ad_id": "7",
        "group_id": "gg-45"
    },
    "parameters": {
        "rooms": 6,
        "size": 25
    }
}'

Getting Data
curl -i -X GET "https://apidev......./v0/types" -H "Authorization: Token token=XxxXXxxXxXXX"

List an entry
curl -i -X GET  "https://apidev....../v0/entries/12495697" -H "Authorization: Token token=XxxXXxxXxXXX"
