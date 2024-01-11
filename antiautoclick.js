function antiautoclick(punishment, options){
  var clickTimes = [];

  document.onclick = function(event) {
    // Save clicks
    if(options.clicksToSave > 0){
      clickTimes.push(new Date());
      if(clickTimes.length > options.clicksToSave) clickTimes.shift();
    }

    // Detect nonhuman clicking
    if((options.detectNonhumanClick == true) && (event.isTrusted == false)){
      punishment.call();
    } else if((options.detectClickInterval.enabled == true) && (clickTimes.length == options.clicksToSave)){
      // Detect click interval
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

    } else if((options.detectFastClicking.enabled == true) && (clickTimes.length > options.clicksToSave)){
      // Detect fast clicking
      const secondsPassed = (clickTimes[clickTimes.length - 1] - clickTimes[0]) * 1000;
      const avgPerSecond = clickTimes.length / secondsPassed;

      if(avgPerSecond > options.detectFastClicking.maximumAvgPerSecond) punishment.call();
    }
  };
}
