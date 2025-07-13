/*const mainhead = document.querySelector( '.main-head' );
const showcase = document.querySelector( '.showcase' );
const toggler = document.querySelector( '.toggler' );

toggler.addEventListener('click', function(){
    mainhead.classList.toggle('active');
    toggler.classList.toggle('width');
} );*/

const body = document.querySelector('body'),
      nav = document.querySelector('nav'),
      sidebarClose = document.querySelector('.sidebarClose'),
      sidebarOpen = document.querySelector('.sidebarOpen');



// Function to toggle the sidebar

sidebarOpen.addEventListener( 'click', () => {
    nav.classList.add('active');
})

body.addEventListener( 'click', e => {
    let clickedElm = e.target;

    if( !clickedElm.classList.contains('sidebarOpen') && !clickedElm.classList.contains('Menu') ){
        nav.classList.remove('active');
    }
});



