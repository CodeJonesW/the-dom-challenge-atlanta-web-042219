const seconds = document.getElementById("counter")
const pause = document.getElementById("pause")
let timer
const plus = document.getElementById("+")
const minus = document.getElementById("-")
const like = document.getElementById("<3")
const likeUl = document.getElementById("likeList")
const commentList = document.getElementById("list")
const form = document.getElementById("comment-form")

        document.addEventListener("DOMContentLoaded", function(){
            incrementCounter()
            timer = setInterval( incrementCounter, 1000)
            pause.addEventListener("click", pauseCounter)
            plus.addEventListener("click", incrementCounterByOne)
            minus.addEventListener("click", function(){seconds.innerText = parseInt(seconds.innerText) - 1})
            like.addEventListener("click", addLike)
            form.addEventListener("submit", addComment)
        })

        function incrementCounter(){
            seconds.innerText = parseInt(seconds.innerText) + 1
        }

        function pauseCounter(e){
            if (e.target.innerText === "Pause") {
                clearInterval(timer)
                e.target.innerText = "Start"
            } else {
                timer = setInterval( incrementCounter, 1000)
                e.target.innerText = "Pause"
            }
        }

        function incrementCounterByOne() {
            seconds.innerText = parseInt(seconds.innerText) + 1
        }

        function addLike(e) {
            let likes = likeUl.children
            let alreadyLiked = false
                for(k in likes) {
                if (likes[k].id === seconds.innerText) {
                    alreadyLiked = true
                    likes[k].children[0].innerText = parseInt(likes[k].children[0].innerText) + 1
                }
            }
            if (!alreadyLiked){
                likeUl.innerHTML += `<li id="${seconds.innerText}">${seconds.innerText} has been liked <span>1</span> time!</li>`
            }
        }

        function addComment(e) {
            e.preventDefault()
            const p = document.createElement("p")
            let input = document.getElementById("comment")
            p.innerText = input.value
            commentList.append(p)
            form.reset()
        }






