# Queries in JSON

- In MongoDB, ALL is JSON :trollface:

## First Query

- [ ] Search a movie whose title is 'Die hard'

```json
{
	"original_title": "Die Hard"
}
```

- [ ] Find all movies whose budget is greater than or equals 28000000 and less than 30000000

> gt: greater than

> gte: greater than or equals

> lt: less than

> lte: less than or equals

> eq: equals

```json
{
	"budget": {
		"$gte": 28000000,
		"$lt": 30000000
	}
}
```

We can include another comparations with other attributes for example:

```json
{
	"budget": {
		"$gte": 28000000
	},
	"revenue": {
		"$gte": 168840000
	}
}
```

# Exercise

- Find all movies whose has a duration of an hour and a half and popular

> attributes: runtime and vote_average

```json
{
	"runtime": {
		"$gte": 90
	},
	"vote_average": {
		"$gte": 8
	}
}
```
