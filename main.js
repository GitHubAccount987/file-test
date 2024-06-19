const mainForm = document.getElementById("mainForm");
const fileInput = document.getElementById("fileInput");

mainForm.addEventListener("submit", async (e) => {

	e.preventDefault();

	const file = fileInput.files[0];

	if (!file) { alert("no file"); return; }

	console.log("Processing...");

	let rawFile = [];

	const reader = file.stream().pipeThrough(new CompressionStream("gzip")).getReader();

	await reader.read().then(function process({ done, value }) {

		if (done) return;

		rawFile.push(...value);

		return reader.read().then(process);
	});

	console.log(rawFile);

});