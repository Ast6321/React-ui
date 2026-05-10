function Register(){

    const [form,setform] = usestate({
        name:"",
        email:"",
        password:""
    })

    return(
        <>
        
        <section>
            <form onSubmit={}>
             <h1>welcome user</h1>
             <input type="text" name="name" placeholder="enter name" value={form.name} onChange={changefn} />



            </form>




        </section>
        
        
        
        
        
        
        </>
    )
}