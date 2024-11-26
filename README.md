# time-commando
Super simple lib for working with JavaScript dates

## Examples

```javascript
const time = require('time-commando');
```

Add 5 minutes to the current date

```javascript
time.D(Date.now() + time.minutes(5));
```

Convert current date to YYYYMMDD

```javascript
time.toYYYYMMDD(new Date()); // "20241126"
```