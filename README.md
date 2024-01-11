# antiautoclick
Small JS script for detecting autoclicking in the client.
Include 
```HTML
<script src="https://unpkg.com/antiautoclick@1.0.6/antiautoclick.js"></script>
```
in your HTML, JS usage is as follows:
```Javascript
const detector = new antiautoclick(punishment, options);
```

## Punishment

A function to run when autoclicking is detected, recommended is:
```Javascript
window.location.reload();
```

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
How many clicks the program keeps track of. Recommended 40, but you can increase it to improve accuracy at the cost of some RAM.

#### detectNonhumanClick:
Determines whether `element.click()` is detected. Recommended true.

#### detectClickInterval:
Detects repetitive and robotic clicking. (Ex. clicking exactly once every 10ms)
- enabled: Determines whether it is active. Recommended true.
- margin: Determines the maximum average difference between click timing to detect. Recommended 10ms.

#### detectFastClicking
Detects really fast clicking.
- enabled: Determines whether it is active. Recommended true
- maximumAvgPerSecong: Determines the maximum average clicks per second without detection. Recommended 40.
