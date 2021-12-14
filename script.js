// get the inputs
      const inputs = [].slice.call(document.querySelectorAll('.controls input'));

      // listen for changes
      inputs.forEach(input => input.addEventListener('change', handleUpdate));
      inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
	  
	    const stylesheet = document.styleSheets[1];
			let boxParaRule;

			for(let i = 0; i < stylesheet.cssRules.length; i++) {
			  if(stylesheet.cssRules[i].selectorText === '.moon') {
				boxParaRule = stylesheet.cssRules[i];
			  }
			}

      function handleUpdate(e) {
		
		  
        // append 'px' to the end of spacing and blur variables
		var amount = this.value;
		if(amount > 50){
			amount = amount - ((amount - 50) * 2)
			boxParaRule.moon.style.setProperty('transform', 'scale(-2)');
		}else{
			boxParaRule.style.setProperty('transform', 'scale(2)');
		}
		  
		const negValue = (amount * -1);
        const suffix = (this.id === 'base' ? '' : 's');
        document.documentElement.style.setProperty(`--${this.id}`, negValue + suffix);
      }