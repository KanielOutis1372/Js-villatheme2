function addFormInput() {
    var getWrapRight = document.getElementById('wrap-right');
    const formBuild = document.createElement('div');
    formBuild.classList.add('form-build');
    // formBuild.id = count;
    formBuild.innerHTML = `
        <div id="form-wrap">
            <div id="form-head">
                <div id="form-title">Input field</div>
                <button id="form-exit" onClick="removeForm()">X</button>
            </div>
            <div id="form-body">
                <div class="group type">
                    <label for="">Type</label>
                    <select name="" id="">
                        <option value="text">text</option>
                        <option value="email">email</option>
                        <option value="number">number</option>
                        <option value="password">password</option>
                    </select>
                </div>

                <div class="group label">
                    <label for="">Label</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group name">
                    <label for="">Name</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group id">
                    <label for="">Id</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group placeholder">
                    <label for="">Placeholder</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group require">
                    <label for="">Require</label>
                    <span class="span-check">
                        <input type="checkbox">
                    </span>
                </div>
            </div>
        </div>
    `;
    getWrapRight.appendChild(formBuild);
}

function addFormTextarea() {
    var getWrapRight = document.getElementById('wrap-right');
    const formBuild = document.createElement('div');
    formBuild.classList.add('form-build');
    formBuild.innerHTML = `
        <div id="form-wrap">
            <div id="form-head">
                <div id="form-title">Texterea field</div>
                <button id="form-exit" onClick="removeForm()">X</button>
            </div>
            <div id="form-body">
                <div class="group type">
                    <label for="">Type</label>
                    <select name="" id="">
                        <option value="textarea">textarea</option>
                    </select>
                </div>

                <div class="group label">
                    <label for="">Label</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group name">
                    <label for="">Name</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group id">
                    <label for="">Id</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group placeholder">
                    <label for="">Placeholder</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group row">
                    <label for="">Row</label>
                    <input type="number" value="0" min=0>
                </div>

                <div class="group column">
                    <label for="">Column</label>
                    <input type="number" value="0" min=0>
                </div>

                <div class="group require">
                    <label for="">Require</label>
                    <span class="span-check">
                        <input type="checkbox">
                    </span>
                </div>
            </div>
        </div>
    `;
    getWrapRight.appendChild(formBuild);
}

function addFormButton() {
    var getWrapRight = document.getElementById('wrap-right');
    const formBuild = document.createElement('div');
    formBuild.classList.add('form-build');
    formBuild.innerHTML = `
        <div id="form-wrap">
            <div id="form-head">
                <div id="form-title">Button field</div>
                <button id="form-exit" onClick="removeForm()">X</button>
            </div>
            <div id="form-body">
                <div class="group type">
                    <label for="">Type</label>
                    <select name="" id="">
                        <option value="button">button</option>
                    </select>
                </div>

                <div class="group label">
                    <label for="">Label</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group name">
                    <label for="">Name</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group id">
                    <label for="">Id</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group placeholder">
                    <label for="">Placeholder</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group require">
                    <label for="">Require</label>
                    <span class="span-check">
                        <input type="checkbox">
                    </span>
                </div>
            </div>
        </div>
    `;
    getWrapRight.appendChild(formBuild);
}

function removeForm() {
    var formBuild = document.querySelector('.form-build');
    formBuild.parentElement.removeChild(formBuild);    
}


function saveData() {
    const arr = [];
    const list = document.querySelectorAll('.form-build');
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        var formTitle = element.querySelector('#form-title').textContent;
        if (formTitle == 'Input field') {
            const inputForm = {};
            inputForm.title = 'Input field';
            inputForm.valueType = element.querySelector("select").value;
            inputForm.valueLabel = element.querySelector('.label input').value;
            inputForm.valueName = element.querySelector('.name input').value;
            inputForm.valueId = element.querySelector('.id input').value;
            inputForm.valuePlaceholder = element.querySelector('.placeholder input').value;
            const require = element.querySelector('.require input');
            const isChecked = require.checked;
            if (isChecked) {
                inputForm.valueRequire = true;
            }
            else {
                inputForm.valueRequire = false;
            }
            if(validateCheck(element)) {
                arr.push(inputForm);
            }
        }
        else if (formTitle == 'Texterea field') {
            const textareaForm = {};
            textareaForm.title = 'Textarea field';
            textareaForm.valueType = element.querySelector("select").value;
            textareaForm.valueLabel = element.querySelector('.label input').value;
            textareaForm.valueName = element.querySelector('.name input').value;
            textareaForm.valueId = element.querySelector('.id input').value;
            textareaForm.valuePlaceholder = element.querySelector('.placeholder input').value;
            textareaForm.valueRow = element.querySelector('.row input').value;
            textareaForm.valueColumn = element.querySelector('.column input').value;
            const require = element.querySelector('.require input');
            const isChecked = require.checked;
            if (isChecked) {
                textareaForm.valueRequire = true;
            }
            else {
                textareaForm.valueRequire = false;
            }
            if(validateCheck(element)) {
                arr.push(textareaForm);
            }
        }
        else if (formTitle == 'Button field') {
            const buttonForm = {};
            buttonForm.title = 'Button field';
            buttonForm.valueType = element.querySelector('select').value;
            buttonForm.valueLabel = element.querySelector('.label input').value;
            buttonForm.valueName = element.querySelector('.name input').value;
            buttonForm.valueId = element.querySelector('.id input').value;
            buttonForm.valuePlaceholder = element.querySelector('.placeholder input').value;
            const require = element.querySelector('.require input');
            const isChecked = require.checked;
            if (isChecked) {
                buttonForm.valueRequire = true;
            }
            else {
                buttonForm.valueRequire = false;
            }
            if(validateCheck(element)) {
                arr.push(buttonForm);
            }
        }
    }

    const myArr = JSON.stringify(arr); 

    // if(isEmpty(result)) {
        if(localStorage.getItem('FORMSDATA')) {
            localStorage.setItem('FORMSDATA', myArr);
        }
        else {
            localStorage.setItem('FORMSDATA', myArr);
        }
    // }
}

function setValueForForms(element, item) {
    element.querySelector('select').value = item.valueType.trim();
    element.querySelector('.label input').value = item.valueLabel.trim();
    element.querySelector('.name input').value = item.valueName.trim();
    element.querySelector('.id input').value = item.valueId.trim();
    element.querySelector('.placeholder input').value = item.valuePlaceholder.trim();
    const checkbox = item.valueRequire;
    if (checkbox) {
        element.querySelector('.require input').checked = true;
    } 
    else {
        element.querySelector('.require input').checked = false;
    }
}

(function loadData() {
    const array = localStorage.getItem('FORMSDATA');
    const convertArrayy = JSON.parse(array);
    // console.log(convertArrayy);
    
    for (const item of convertArrayy) {
        if (item.title == 'Input field') {
            addFormInput();
        }  
        
        if (item.title == 'Textarea field') {
            addFormTextarea();
        }
        if (item.title == 'Button field') {
            addFormButton();
        }
        // console.log(item);
    }

    const listForm = document.querySelectorAll('.form-build');
    for (let i = 0; i < listForm.length; i++)  {
        if (convertArrayy[i].title == 'Textarea field') {
            listForm[i].querySelector('.row input').value = convertArrayy[i].valueRow;
            listForm[i].querySelector('.column input').value = convertArrayy[i].valueColumn;
        }
        setValueForForms(listForm[i], convertArrayy[i]);
    }
})();

function validateCheck(item) {
    var result = true;
    const listForm = document.querySelectorAll('.form-build');
    // for (const item of listForm) {
        const label = item.querySelector('.label input');
        const name = item.querySelector('.name input');
        const id = item.querySelector('.id input');

        const errorLabel = item.querySelector('.label span'); 
        const errorName = item.querySelector('.name span'); 
        const errorId = item.querySelector('.id span'); 


        if(label.value.trim() === '') {
            errorLabel.innerHTML = 'Trường này không được trống!';
            errorLabel.style.color = 'red';
            label.style.borderColor = 'red';
            result = false;
        }
        else {
            errorLabel.innerHTML = '';
            errorLabel.style.color = '';
            label.style.borderColor = '';
        }

        if(name.value.trim() === '') {
            errorName.innerHTML = 'Trường này không được trống!';
            errorName.style.color = 'red';
            name.style.borderColor = 'red';
            result = false;
            
        }
        else {
            errorName.innerHTML = '';
            errorName.style.color = '';
            name.style.borderColor = '';
            validateName(name, errorName, result);
        }

        if(id.value.trim() === '') {
            errorId.innerHTML = 'Trường này không được trống!';
            errorId.style.color = 'red';
            id.style.borderColor = 'red';
            result = false;
        }
        else {
            errorId.innerHTML = '';
            errorId.style.color = '';
            id.style.borderColor = '';
            validateId(id, errorId, result);
        }
    // }
    
    return result;
}

function validateName(name, errorName, result) {
    // Biểu thức chính quy để kiểm tra
    var nameRegex = /^[a-zA-Z][a-zA-Z0-9-_]*$/;

    // Kiểm tra nếu tên hợp lệ
    if (!nameRegex.test(name.value)) {
        errorName.innerHTML = 'Tên bắt đầu bằng một chữ cái(a-z hoặc A-Z), tên có thể chứ các chữ cái (a-z hoặc A-Z)!' 
        + 'chữ số (0-9), dấu gạch dưới(_), hoặc dấu gạch ngang(-)';
        errorName.style.color = 'red';
        name.style.borderColor = 'red';
        result = false;   
    }
    return result;
}

function validateId(id, errorId, result) {
     // Biểu thức chính quy để kiểm tra
    var idRegex = /^[a-zA-Z][a-zA-Z0-9-_]*$/;

    // Kiểm tra nếu ID hợp lệ
    if (!idRegex.test(id.value)) {
        errorId.innerHTML = 'Tên bắt đầu bằng một chữ cái(a-z hoặc A-Z), tên có thể chứ các chữ cái (a-z hoặc A-Z)!' 
        + 'chữ số (0-9), dấu gạch dưới(_), hoặc dấu gạch ngang(-)';
        errorId.style.color = 'red';
        id.style.borderColor = 'red';
        result = false;
    }
    return result;
}



  
