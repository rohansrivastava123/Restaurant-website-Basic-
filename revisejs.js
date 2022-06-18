const images = document.querySelectorAll(".img");
console.log(images);

images.forEach((image) =>
{
    console.log(image)
    image.addEventListener("mouseover", function op() {
        console.log("hi");
      })
});
//searchbox 
const tb= document.querySelector(".textb")
tb.addEventListener('click',function remove()
{
  const img= document.querySelector('.im1')
  img.style.display='none';
  const ph= document.querySelector('.textb')
  ph.placeholder="search your favourite dish"
}) 
document.addEventListener("click",function rem()
{
  const ph= document.querySelector('.textb')
  ph.value='';
  sugg.innerHTML=''
  ph.placeholder="search your favourite dish"
})


//items finding in the menu
const list1 = 'list.txt';
let items = [];
fetch(list1).then(res => res.json()).then(data => items.push(...data));
function wordtomatch(word,items)
{
  return items.filter(it => 
    {
      const regex = new RegExp(word,'gi');
      return it.item.match(regex)
    });
}

//function to display the suggestions
function displaymatches()
{
  const matcharr=wordtomatch(this.value,items)
  const html = matcharr.map( it => {
    return`
    <li>
      <div class="items_li">${it.item} @ ${it.price} Rs <Button class="btn1"> Order Now </Button></div>
    </li>`
  }).join('');   
  sugg.innerHTML= html;
  
}
const sugg=document.querySelector(".suggestions")
tb.addEventListener('change',displaymatches)
tb.addEventListener('keyup',displaymatches)


