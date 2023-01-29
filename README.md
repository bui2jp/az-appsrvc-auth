# az-appsrvc-auth

## deploy app service
```
#APP_SRVC_NAME=myAppService-$RANDOM
APP_SRVC_NAME=myAppService-25595
az webapp up --sku F1 -g tcase-02 --name $APP_SRVC_NAME
```


AD B2C 設定
```
アプリケーション (クライアント) ID
4d54d815-a347-4242-afab-bbebe322eb92

ディレクトリ (テナント) ID
4b3b5dd6-f4d5-49f6-a7f0-c135818c6062

scope
https://tcase2023org.onmicrosoft.com/spa-demo/test


spa-demo
シークレット値
_h-8Q~2IMFNpVeGJ3Bh2hxWrn556Xe_aH9nHscel
シークレットID
62063c6b-9595-4fe6-8a99-59fd2f9033eb

発行者のURL
https://tcase2023org.b2clogin.com/tcase2023org.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_susi

https://tcase2023org.b2clogin.com/tcase2023org.onmicrosoft.com/v2.0/.well-known/openid-configuration

https://<TENANT_NAME>.b2clogin.com/<TENANT_NAME>.onmicrosoft.com/<POLICY_NAME>/v2.0/.well-known/openid-configuration

redirect uri
https://myappservice-25595.azurewebsites.net/.auth/login/aad/callback

承認エンドポイントによって発行してほしいトークン
 access token と id token
```

# login
https://myappservice-25595.azurewebsites.net/.auth/login/aadb2c

# logout
https://myappservice-25595.azurewebsites.net/.auth/logout


azure ad
https://myappservice-25595.azurewebsites.net/.auth/login/aad

azure ad b2c
https://myappservice-25595.azurewebsites.net/.auth/login/aadb2c

https://myappservice-25595.azurewebsites.net/.auth/login/aad



https://myappservice-25595.azurewebsites.net/#token=%7B%22authenticationToken%22%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFibGVfc2lkIjoic2lkOjFjNjM1NTI0MzI3YjNhMDdiM2Q0YTE3ZGU5MTI5ZDkxIiwic3ViIjoic2lkOjFjNjM1NTI0MzI3YjNhMDdiM2Q0YTE3ZGU5MTI5ZDkxIiwiaWRwIjoiYWFkYjJjIiwidmVyIjoiMyIsIm5iZiI6MTY3NDM1Mzg0NCwiZXhwIjoxNjc2OTQ1ODQ0LCJpYXQiOjE2NzQzNTM4NDQsImlzcyI6Imh0dHBzOi8vbXlhcHBzZXJ2aWNlLTI1NTk1LmF6dXJld2Vic2l0ZXMubmV0LyIsImF1ZCI6Imh0dHBzOi8vbXlhcHBzZXJ2aWNlLTI1NTk1LmF6dXJld2Vic2l0ZXMubmV0LyJ9.ik9bP4its4qEwdmY2wGniqTpSF7dHmUkAxwENKgc2hw%22%2C%22user%22%3A%7B%22userId%22%3A%22sid%3A1c635524327b3a07b3d4a17de9129d91%22%7D%7D
