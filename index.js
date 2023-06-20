document.getElementById('convert-btn').addEventListener('click', function() {
    var fileInput = document.getElementById('file-input');
    var file = fileInput.files[0];
  
    if (file) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        var result = e.target.result;
        var output = document.getElementById('output');
        output.textContent = result;
        toggleDownloadButton(result);
      };
  
      reader.readAsText(file);
    }
  });
  
  function toggleDownloadButton(content) {
    var downloadBtn = document.getElementById('download-btn');
    var textFile = new Blob([content], { type: 'text/plain' });
    downloadBtn.setAttribute('href', URL.createObjectURL(textFile));
    downloadBtn.style.display = 'block';
  }
  