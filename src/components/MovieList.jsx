import Movie from "./Movie"
export default function movieList(props){
          const {result} = props
          console.log('result');
          return(
                    <section>
                              <h2>Watch</h2>
                              <div className="row gap-5">
                                        {
                                                  result.map((item, i)=><Movie key={i} {...item}/>)
                                                  
                                        }
                                        
                                        
                                        
                              </div>
                    </section>
                    
          )
}