const codeSnippets = document.querySelectorAll('.code-snippet');
codeSnippets.forEach(snippet => {
    // select the code .code-snippet --> 
    //                      .code-header  [0]
    //                      .align-left   [1]  --> Select this
    //                          <pre>
    //                              <code>           
    const code = snippet.children[1];
    // check if code width is overflowing, if no then remove scroll bar from overflowX
    if (!(snippet.scrollWidth > snippet.getBoundingClientRect().width) && window.innerWidth > 1150) {
        snippet.style.overflowX = 'hidden';
    }
});

const copyButtons = document.querySelectorAll('.copy-button');
copyButtons.forEach(code => {
    code.addEventListener('click', () => {
        // get the surrounding div, than get the main div 
        const parentDiv = code.parentElement.parentElement;
        // parentDiv
        //      .header-copy
        //      .align-left
        //          <pre>
        //              <code>
        const textToCopy = parentDiv.children[1].textContent;
        navigator.clipboard.writeText(textToCopy);
        alert("Code copied");
    });
});