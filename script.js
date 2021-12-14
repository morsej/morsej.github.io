// get the inputs
      const inputs = [].slice.call(document.querySelectorAll('.controls input'));

      // listen for changes
      inputs.forEach(input => input.addEventListener('change', handleUpdate));
      inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

      function handleUpdate(e) {
        // append 'px' to the end of spacing and blur variables
		const negValue = (this.value * -1);
        const suffix = (this.id === 'base' ? '' : 's');
        document.documentElement.style.setProperty(`--${this.id}`, negValue + suffix);
      }