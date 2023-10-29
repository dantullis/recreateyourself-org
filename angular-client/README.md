Recreate Yourself

docker build -t dantullis/recreate-yourself-client:1.0.0 .

docker push dantullis/recreate-yourself-client:1.0.0

kubectl describe certificate recreate-yourself-tls
