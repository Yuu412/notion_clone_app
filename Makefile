# フロントエンドのサービス名
front=front
# バックエンドのサービス名
backend=backend
# データベースのサービス名
db=mongo

up:
	@echo "================================="
	@echo "コンテナの起動（dev環境）"
	@echo "================================="
	@sleep 5
	docker-compose down
	docker compose up -d

down:
	@echo "================================="
	@echo "コンテナを停止します（dev環境）"
	@echo "================================="
	@sleep 5
	docker-compose down

build:
	@echo "================================="
	@echo "コンテナの構築 & 起動（dev環境）"
	@echo "================================="
	@sleep 5
	docker-compose down
	docker compose up -d --build

in-front:
	@echo "================================="
	@echo "Reactのコンテナに入ります"
	@echo "================================="
	docker-compose exec $(front) bash

in-backend:
	@echo "================================="
	@echo "Express(node.js)のコンテナに入ります"
	@echo "================================="
	docker-compose exec $(backend) bash

in-db:
	@echo "================================="
	@echo "mongo.dbのコンテナに入ります"
	@echo "================================="
	docker-compose exec $(db) bash

localhost:
	@echo " "
	@echo "localhostのIPアドレスを表示するためには、この後以下のコマンドを実行してください。"
	@echo "その後、.envファイルの、LOCALHOSTに表示されたIPアドレスを指定してください。"
	@echo " "
	@echo "=== 実行するコマンド ==============="
	@echo "cat /etc/hosts | awk 'END{print $1}' | sed -e 's/[0-9]\+$/1/g'"
	@echo "================================="
	docker-compose exec $(backend) bash