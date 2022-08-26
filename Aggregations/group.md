### for agroup per adult and display avg and quantity example

```json
{
	"_id": "$adult",
	"average_note": {
		"$avg": "$vote_average"
	},
	"quantity": {
		"$sum": 1
	}
}
```
