# Lokasi

![Sample of image preview](https://github.com/muhibbudins/lokasi/blob/master/sample-preview.png "Sample of image preview")

*Lokasi* is simple library to *get()* and *set()* position of element with structure "Object Pattern" and compatible with AMD or Common JS module. *Lokasi* can use without dependency like jQuery etc. and this library will be return _position_ of object / element with initialize on *class* like ```<div class="target"></div>``` and will be return parent of element too.

#### Note : Don't forget to set parent position with _relative_ and result of position will be affect for their parent

### Example

Just clone / download this repository and try on browser or see `` index.html `` file.

## How to use

*Lokasi* just have two method inner class *Lokasi* :

### 1. Method _.get()_

Use method _.get()_ to get position and parent of object / element, this method will be return object like this :

``` javascript 
	
	Lokasi.get('.target-3');

	/* result
		{
			target: <div.target-3>,
			parent: <div.wrapper-1>, 
			left: 135,
			top: 18,
			right: 425,
			bottom: 124
		}
	*/
```

### 2. Method _.set()_

Use method _.set()_ to set position of object / element, this method have 3 parameters to use _(target, offset left, offset right)_ :

``` javascript 
	
	Lokasi.set('.target-5', 20, 10);

```

If you want to get callback after action, you can use callback like this :

``` javascript 
	
	Lokasi.set('.target-5', 20, 10, function(res) {
		console.log(res);
	});

	/* result
		{
			target: <div.target-5>,
			parent: <div.wrapper-2>, 
			left: 20,
			top: 10,
			right: 540,
			bottom: 30
		}
	*/
```

## License

Don't worry of license, just use it when you need. Contact me if you have problem for this library (muhibbudinsuretno1@gmail.com) or @muhibbudins (LinkedIn and Github). Thanks for watching
