const InyectHTML = ()=>{


    const Controler = async (el,url)=>{

        try {

            let options = {
                method:'GET',
                headers:{
                    'Content-Type':'text/html'
                }
            }

            let res =await axios(url,options)
            el.outerHTML = res.data

        } catch (err) {
            el.outerHTML = `${err.response.status} An Error occurred please check the references`
        }

    }

    let $reference = document.querySelectorAll('[data-content]')
    $reference.forEach((el) => Controler(el,el.dataset.content))
} 
document.addEventListener('DOMContentLoaded',(e) => InyectHTML())