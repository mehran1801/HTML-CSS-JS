The addEventListener() and onclick both listen for an event. Both can execute a callback function when a button is clicked. However, they are not the same.

onclick: The onclick event logs the click activity, and then calls a desired function, the onClick event only adds one event to an element.

element.addEventListener(event, listener, useCapture);

`<body>
<button id="btn">Click here</button>
<h1 id="text1"></h1>
<h1 id="text2"></h1>

<script>
	let btn_element = document.getElementById("btn");

	btn_element.addEventListener("click", () => {
	document.getElementById("text1")
		.innerHTML = "Task 1 is performed";
	})

	btn_element.addEventListener("click", () => {
	document.getElementById("text2")
		.innerHTML = "Task 2 is performed";
	});
</script>
</body>
`
[Read here](https://www.geeksforgeeks.org/difference-between-addeventlistener-and-onclick-in-javascript/)



<!-- Tailwind -->

If you need to use a one-off breakpoint that doesn’t make sense to include in your theme, use the min or max modifiers to generate a custom breakpoint on the fly using any arbitrary value.
`<div class="min-[320px]:text-center max-[600px]:bg-sky-300">
  <!-- ... -->
</div>`
Combining both

You can also use both of the media features together by combining them with the ‘and’ operator.

Example
`
P {

font-style:bold;

}

@media screen and (min-width: 600px) and (max-width:700px) {

p {

font-style: italic;

}

}
`
The above code specifies that if the screen width lies between 600px to 700px then the font style will be italic otherwise the font style will be bold.