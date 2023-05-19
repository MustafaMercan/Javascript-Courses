let myLibrary = []
function Book(author,title,totalPages,completedPages) {
    this.author = author
    this.title = title
    this.totalPages = totalPages
    this.completedPages = completedPages
}

function BookInfo(books, completedBook,completedPages, totalPages)
{
    this.books = books
    this.completedBook = completedBook
    this.completedPages = completedPages
    this.totalPages = totalPages
}

function addBookToLibrary (data){
    myLibrary.push(data)
}

let bookInformation = new BookInfo(0,0,0,0)

const createNewCard = (bookData) => {

    let newCard = document.createElement("div")
    newCard.classList.add("card")

    var titleP = document.createElement("p")
    titleP.textContent = "Title : "

    var titleSpan = document.createElement("span")
    titleSpan.classList.add("title-sp")
    titleSpan.textContent = bookData.title

    titleP.appendChild(titleSpan)
    newCard.appendChild(titleP)


    var author = document.createElement("p")
    var authorSpan = document.createElement("span");

    authorSpan.textContent = bookData.author
    authorSpan.classList.add("author-sp")
    author.textContent = "Author : "

    author.appendChild(authorSpan);
    newCard.appendChild(author);



    var totalPages = document.createElement("p")
    var totalPagesSpan = document.createElement("span");

    totalPagesSpan.textContent = bookData.totalPages
    totalPagesSpan.classList.add("total-pages-sp")
    totalPages.textContent = "Total pages : "

    totalPages.appendChild(totalPagesSpan);
    newCard.appendChild(totalPages);


    var completedOPages = document.createElement("p")
    var completedOPagesSpan = document.createElement("span");

    completedOPagesSpan.textContent = bookData.completedPages
    completedOPagesSpan.classList.add("completed-pages-sp")
    completedOPages.textContent = "Completed pages : "

    completedOPages.appendChild(completedOPagesSpan);
    newCard.appendChild(completedOPages);

    var btn = document.createElement("button");
    btn.classList.add("completed");
    btn.textContent="Completed"
    btn.addEventListener("click",complateHandler)
    newCard.appendChild(btn)

    return newCard;

}

const newCardHandler = function(){

    const addCard = document.getElementsByClassName("add-card")[0];
    addCard.style.display = "flex"
}
const cancelBtnHandler = function(){
    const addCard = document.getElementsByClassName("add-card")[0];
    addCard.style.display = "none"

    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("input")
    const labels = document.querySelectorAll("label")

    const errorMessage = document.getElementsByClassName("error-message")[0]
    errorMessage.textContent = ""


    for(let i = 0 ; i < 4 ; i++)
    {
        labels[i].style.color = "white";
        inputs[i].style.borderColor = "black"
    }

    form.reset();
}
const submitBtnHandler = function(event){


    event.preventDefault()

    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("input")
    const labels = document.querySelectorAll("label")

    const title = inputs[0].value;

    const author = inputs[1].value;

    const totalPages = inputs[2].value;

    const completedPages = inputs[3].value;

    let errorFlag = false;        
    let flag_completed = false;
    let flag_totalPages = false;

    const errorMessage = document.getElementsByClassName("error-message")[0]

    if(title === "" || author === "" || totalPages === "" || completedPages === "")
    {
        errorFlag = true;
        errorMessage.textContent = "Please fill all blanks."
        errorMessage.style.fontSize = "20px"

        if(title === "")
        {
            labels[0].style.color = "red";
            inputs[0].style.borderColor = "red"
        }
        else
        {
            labels[0].style.color = "white";
            inputs[0].style.borderColor = "black"             
        }  
        if(author=== "")
        {
            labels[1].style.color = "red";
            inputs[1].style.borderColor = "red"

        }
        else
        {
            labels[1].style.color = "white";
            inputs[1].style.borderColor = "black"             
        }  
        if(totalPages === "")
        {
            labels[2].style.color = "red";
            inputs[2].style.borderColor = "red"   
        }
        else
        {
            labels[2].style.color = "white";
            inputs[2].style.borderColor = "black"             
        }  
        if(completedPages === "")
        {
            labels[3].style.color = "red";
            inputs[3].style.borderColor = "red"   
        }
        else
        {
            labels[3].style.color = "white";
            inputs[3].style.borderColor = "black"             
        }        

    }
    else
    {
        if(isNaN(completedPages))
        {
            errorMessage.textContent = "Total Pages and completed pages are must number!!"
            flag_completed = true;
            labels[3].style.color = "red";
            inputs[3].style.borderColor = "red"   
        }
        else if(!isNaN(completedPages))
        {
            flag_completed = false;
            labels[3].style.color = "white";
            inputs[3].style.borderColor = "black"             
        }  
        if(isNaN(totalPages))
        {
            errorMessage.textContent = "Total Pages and completed pages are must number!!"
            flag_totalPages = true;
            labels[2].style.color = "red";
            inputs[2].style.borderColor = "red"   
        }
        else if(!isNaN(totalPages))
        {
            flag_totalPages = false;
            labels[3].style.color = "white";
            inputs[3].style.borderColor = "black"             
        }  
    }


    if(!errorFlag && !flag_completed && !flag_totalPages)
    {
        for(let i = 0 ; i < 4 ; i++)
        {
            labels[i].style.color = "white";
            inputs[i].style.borderColor = "black"
        }

        const bookScreen = document.getElementsByClassName("book-screen")[0];

        const newBook = new Book(author,title,totalPages,completedPages)
        addBookToLibrary(newBook)
        bookScreen.appendChild(createNewCard(newBook))

        bookInformation.totalPages += parseInt(totalPages);

        const  spanBookInfo = document.querySelectorAll(".information-books p span");

        bookInformation.books++;

        bookInformation.completedPages += parseInt(completedPages);


        console.log(bookInformation.books,bookInformation.completedBook,bookInformation.totalPages,bookInformation.completedPages)
        
        spanBookInfo[0].textContent = bookInformation.books
        spanBookInfo[1].textContent = bookInformation.completedBook
        spanBookInfo[2].textContent = bookInformation.totalPages
        spanBookInfo[3].textContent = bookInformation.completedPages

        form.reset()
        
        const addCard = document.getElementsByClassName("add-card")[0];
        addCard.style.transition = "all 1s ease";
        addCard.style.opacity = "0"
        
        setTimeout(function(){
            const addCard = document.getElementsByClassName("add-card")[0];
            addCard.style.display = "none"
            addCard.style.opacity = "1"

        },1000)

    }
}

const complateHandler = function(event){
    
    const parent = event.target.parentNode;
    const complatedPage = parent.getElementsByClassName("completed-pages-sp")[0];
    const totalPage = parent.getElementsByClassName("total-pages-sp")[0]

    const author = parent.getElementsByClassName("author-sp")[0]
    const title = parent.getElementsByClassName("title-sp")[0];


    bookInformation.completedBook++;
        
    bookInformation.completedPages -= parseInt(complatedPage.textContent);
    bookInformation.completedPages += parseInt(totalPage.textContent);
    

    const  spanBookInfo = document.querySelectorAll(".information-books p span");
    spanBookInfo[0].textContent = bookInformation.books
    spanBookInfo[1].textContent = bookInformation.completedBook
    spanBookInfo[2].textContent = bookInformation.totalPages
    spanBookInfo[3].textContent = bookInformation.completedPages

    for(let i = 0 ; i < myLibrary.length ; i++)
    {
        if(myLibrary[i].author === author && 
            myLibrary[i].title === title &&
            myLibrary[i].totalPages === parseInt(totalPage) && 
            myLibrary[i].completedPages === parseInt(complatedPage)
            ){
                myLibrary.splice(i, 1);
                break;
            }

    }
    parent.remove()
}

const resetBookHandler = function(event){
    if(myLibrary.length != 0)
    {
        const cards = document.getElementsByClassName("card");
        while(cards.length != 0)
        {
            cards[0].remove();
        }
        myLibrary  = []
    }

}



const createCardDiv = document.getElementsByClassName("new-card")[0];
createCardDiv.addEventListener("click",newCardHandler);

const cancelBtn = document.getElementsByClassName("cancel-btn")[0]
cancelBtn.addEventListener("click",cancelBtnHandler)

const submitBtn = document.getElementsByClassName("submit-btn")[0];
submitBtn.addEventListener("click",submitBtnHandler);

const resetBtn = document.getElementsByClassName("reset-btn")[0];
resetBtn.addEventListener("click",resetBookHandler);


