# antiautoclick
Small JS script for detecting autoclicking in the client

## Options:
```Javascript
const options = {
    clicksToSave: 40,
    detectNonhumanClick: true,
    detectClickInterval: {
      enabled: true,
      margin: 10
    },
    detectFastClicking: {
      enabled: true,
      maximumAvgPerSecond: 40
    }
  }
```

#### clicksToSave:
How many clicks the program keeps track of. Default 40, but you can increase it to improve accuracy at the cost of some RAM.

#### detectNonhumanClick:
Determines whether `element.click()` is detected. Default true.

#### detectClickInterval:
Detects repetitive and robotic clicking. (Ex. clicking exactly once every 10ms)
- enabled: Determines whether it is active. Default true.
- margin: Determines the maximum average difference between click timing to detect. Default 10ms.

#### detectFastClicking
Detects really fast clicking.
- enabled: Determines whether it is active. Default true
- maximumAvgPerSecong: Determines the maximum average clicks per second without detection. Default 40.
