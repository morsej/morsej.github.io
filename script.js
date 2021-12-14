// get the inputs
      const inputs = [].slice.call(document.querySelectorAll('.controls input'));

      // listen for changes
      inputs.forEach(input => input.addEventListener('change', handleUpdate));
      inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
	  
	  

      function handleUpdate(e) {
        // append 'px' to the end of spacing and blur variables
		var amount = this.value;
		if(amount > 50){
			amount = amount - ((amount - 50) * 2)
			document.moon.style.setProperty('webkit-transform', 'scaleX(-1)');
		}else{
			document.moon.style.setProperty('webkit-transform', 'scaleX(1)');
		}
		  
		const negValue = (amount * -1);
        const suffix = (this.id === 'base' ? '' : 's');
        document.documentElement.style.setProperty(`--${this.id}`, negValue + suffix);
      }