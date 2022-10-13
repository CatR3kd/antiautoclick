function antiautoclick(userPunishment, userOptions){
  var clickTimes = [];
  const options  = {
    clicksToSave: userOptions.clicksToSave || 40,
    detectNonhumanClick: userOptions.detectNonhumanClick ||  true,
    detectClickInterval: {
      enabled: userOptions.detectClickInterval.enabled || true,
      margin: userOptions.detectClickInterval.userOptions || 10
    },
    detectFastClicking: {
      enabled: userOptions.detectFastClicking.enabled || true,
      maximumAvgPerSecond: userOptions.detectFastClicking.maximumAvgPerSecond || 40
    }
  }
  const punishment = userPunishment || (window.location.reload());

  document.onclick = function(event) {
    // Save clicks
    if(options.clicksToSave > 0){
      clickTimes.push(new Date());
      if(clickTimes.length > options.clicksToSave) clickTimes.shift();
    }

    // Detect nonhuman clicking
    if((options.detectNonhumanClick == true) && (event.isTrusted == false)) punishment.call();

    // Detect click interval
    if((options.detectClickInterval.enabled == true) && (clickTimes.length == options.clicksToSave)){
      let maximumDifference = 0;
      for(let i in clickTimes){
        if(i > 1){
          const difference = Math.abs(clickTimes[i] - clickTimes[i-1]);
          if(difference > maximumDifference) maximumDifference = difference;
        }
      }

      if(maximumDifference < options.detectClickInterval.margin){
        punishment.call();
      }

    }

    // Detect fast clicking
    if((options.detectFastClicking.enabled == true) && (clickTimes.length > options.clicksToSave)){
      const secondsPassed = (clickTimes[clickTimes.length - 1] - clickTimes[0]) * 1000;
      const avgPerSecond = clickTimes.length / secondsPassed;

      if(avgPerSecond > options.detectFastClicking.maximumAvgPerSecond) punishment.call();
    }
  };
}
