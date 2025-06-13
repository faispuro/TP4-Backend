const express =require('express')
const app=express()
const personasRoutes=require('./routes/personaRoutes')
app.use('/api/personas',personasRoutes);
const PORT =3000;
app.listen(PORT,()=>console.log(`Servidor corriendo en el puerto ${PORT}`));
