// یک پروزه تو دو لیست پیاده کنید

// به این صورت که یک ارایه ای برای ذخیره تودو ها داشته باشید و به طور دیفالت 3 تودو داخل ان ذخیره کنید
// هر تودو مشخصاتی مثل ایدی و اسم تودو و وضعیت را دارد

//منویی به 3 گزینه یه صورت زیر به کاریر نمایش دهید:
//اضافه کردن تودو1 
//حذف نودو2
//3انجام تودو ( تعییر وضعیت )

// در قسمت اول اسم تودویی را از کاربر دریافت کرده و به لیست تودو ها اصافه کنید
// در قسمت دوم اسم تودویی را از کاربر دریافت کرده و انرا از لیست تودو ها خذف کنید
// در قسمت سوم اسم تودو را دریافت کرده و همان تودو را در وضعیت انجام شده قرار دهید

// در پایان هر کدام از عملیات ها, لیست تودو ها را در کنسول نمایش دهید

var todosArray = [
    { id : 1 , title : "learn js" , isDoing : false } ,
    { id : 2 , title : "make footer" , isDoing : true } ,
    { id : 3 , title : "design" , isDoing : false } ,
    { id : 4 , title : "vue react" , isDoing : false }
]

var userMenu = prompt(" Choose one of them :\n1.Add To Do \n2.Remove To Do \n3.Doing To Do")

if( userMenu === "1" ){
    var newToDoName = prompt("Enter The new To Do Name :" , '')

    var newArraye = { id : todosArray.length + 1 ,
        title : newToDoName ,
        isDoing : false  
    }
    // وثتی یک تودویی تازه میخواد اد یشه قطغا به طور دیفالت انجام نشده

    todosArray.push(newArraye)
    console.log("Todos Array: ",todosArray)

}else if( userMenu === "2" ){
    var removeTodoName = prompt("Enter The removable todo Name: " , "")

    var removableToDoIndex = todosArray.findIndex( function (todo){
            return todo.title === removeTodoName
        })

    todosArray.splice(removableToDoIndex,1)
    console.log("todos Array:",todosArray)

}else if ( userMenu === "3" ){ 
    var editableTodoName = prompt("Enter The removable todo Name: " , "")
    todosArray.forEach( function(todo){
        if(todo.title === editableTodoName ){
            todo.isDoing = true
        }
        console.log("Todos Array: ",todosArray)
    })
}else{
    alert("choose between choises")
}



