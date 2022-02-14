INSTRACTION

Запуск

$ npm run start 

-файле .env конфигурация для бд. Добавить свою.

	PORT
	POSTGRES_HOST
	POSTGRESS_PORT
	POSTGRES_USER
	POSTGRESS_PASSWORD
	POSTGRES_DB
USERS:
-Создать пользователя:

	роут вашHOST:вашPORT/users/
	
	например (localhost:5000/users/)
	
	метод POST данные:
	
	{
    	  "name":"Catterpiller",
    	  "email":"Cat@gmail.com"
	}

- Получить всех пользователей:
- 
	роут вашHOST:вашPORT/users/ 
	
	метод GET:

-Получить данные пользователя по email:

	роут вашHOST:вашPORT/users/email/ 
	
	метод GET данные, email - пользователя:
	
	{
    	  "email":"Cat@gmail.com"
	}

-Подписаться на сервис пользователю:

	роут вашHOST:вашPORT/users/subscribe/ 
	
	метод POST, данные id - пользователя, title - сервиса:
	
	{
	  "id": 1
    	  "title":"NETFLIX"
	}

-Получить список сервисов на который подписан пользователь:

	роут вашHOST:вашPORT/users/service/
	
	метод GET, данные id - пользователя:
	
	{
    	  "id": 1
	}

SERVICE: 

-Создать сервис подписки:

	роут вашHOST:вашPORT/services/ 
	
	например (localhost:5000/services/)
	
	метод POST данные title - название сервиса, description - описание сервиса:
	
	{
    	  "title":"NETFLIX",
    	  "description":"streaming channel"
	}

- Получить все сервисы:

	роут вашHOST:вашPORT/services/ 
	
	метод GET:

- Получение списка популярных сервисов: 

	роут вашHOST:вашPORT/services/term 
	метод GET, данные term - строка, является подстрокой title сервиса:
	
	{
    	  "term":"Net"
	}
	
	выведет список сервисов (например): 
	
	[
    	  "NETFLIX",
          "NETUNIVERSE",
    	  "NETFILMIX"
	]
	
