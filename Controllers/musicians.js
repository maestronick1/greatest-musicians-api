const db = require('../models')
const router = require('express').Router()

router.get('/', (req, res)=>{
        db.Musician.find()
        .then(foundMusicians=>{
            res.send(foundMusicians)

        })
        .catch(err=>{
            console.log(err)
            res.status(503).send({message: "Database asleep"})
        })
})

router.get('/:id', (req, res)=>{
    db.Musician.findById(req.params.id)
    .then(foundMusician=>{
        if(foundMusician){

        }else{
            res.status(404).send({message: "resource not located"})
        }
    }).catch(err=>{
        console.log(err)
        res.status(503).send({message: 'Service Unavailable'})
    })

})

router.post('/', (req, res)=>{
    console.log(req.body)
    db.Musician.create(req.body)
    .then(createdMusician=>{
        console.log(createdMusician)
        res.status(201).send(createdMusician)
    })
    .catch(err=>{
        console.log('Error while creating', err)
        if(err.name === 'ValidationError'){
            res.status(406).send({message: 'Validation Error'})
        } else {
            res.status(503).send({message:'Database or server error!'})
        }
    })
    // res.send('You\'ve hit the POST /bounties route!')
})


router.put('/:id', (req, res)=>{
    db.Musician.findOneAndUpdate({
        _id: req.params.id
    },
    req.body,
    {
        new: true
    })
    .then(updatedMusician=>{
        res.send(updatedMusician)
    })
    .catch(err=>{
        console.log(err)
        res.status(503).send({message: 'Server Error'})
    })
    
})


router.delete('/', (req, res)=>{
    db.Musician.deleteMany()
    .then(()=>{
        res.send({message: 'We did it?'})
    })
    .catch(err=>{
        console.log(err)
        res.status(503).send({message: 'Server Error'})
    })
    
})


router.delete('/:id', (req, res)=>{
    db.Musician.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.status(204).send()
    })
    .catch(err=>{
        console.log(err)
        res.status(503).send({message: 'Server Error'})
    })
    
})


module.exports = router