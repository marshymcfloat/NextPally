const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/NextPally').then(()=> {
    console.log('Mongoose is now connected')
}).catch((err)=> {
    console.log('Mongoose connection for Services has an error saying:', err)
})

const serviceSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    branchID:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Branch'
    },
    description: {
        type: String,
        required: true
    },
    price: {
        required: true,
        type: Number
    }
})


const Service = mongoose.model('Service', serviceSchema)

module.exports = Service



/* Service.insertMany([
 {
    name: 'Basic Manicure',
    branchID: '67060ce163731633f8aa18fe',
    description: 'A basic manicure that includes nail shaping, cuticle care, and polish application.',
    price: 250
  },
  {
    name: 'Basic Pedicure',
    branchID: '67060ce163731633f8aa18fe',
    description: 'A basic pedicure with nail trimming, cuticle care, and a moisturizing foot massage.',
    price: 300
  },
  {
    name: 'Gel Manicure',
    branchID: '67060ce163731633f8aa18fe',
    description: 'A long-lasting gel manicure with a glossy finish.',
    price: 500
  },
  {
    name: 'Gel Pedicure',
    branchID: '67060ce163731633f8aa18fe',
    description: 'A durable gel pedicure with a long-lasting finish.',
    price: 600
  },
  {
    name: 'French Manicure',
    branchID: '67060ce163731633f8aa18fe',
    description: 'A classic French manicure with natural-looking pink and white tips.',
    price: 350
  },
  {
    name: 'French Pedicure',
    branchID: '67060ce163731633f8aa18fe',
    description: 'A chic French pedicure with natural white tips.',
    price: 400
  },
  {
    name: 'Nail Art',
    branchID: '67060ce163731633f8aa18fe',
    description: 'Intricate nail art design customized to your style.',
    price: 800
  },
  {
    name: 'Spa Manicure',
    branchID: '67060ce163731633f8aa18fe',
    description: 'An indulgent spa manicure with exfoliation, massage, and paraffin treatment.',
    price: 450
  },
  {
    name: 'Spa Pedicure',
    branchID: '67060ce163731633f8aa18fe',
    description: 'A pampering spa pedicure with a luxurious foot mask and massage.',
    price: 550
  },
  {
    name: 'Paraffin Manicure',
    branchID: '67060ce163731633f8aa18fe',
    description: 'A soothing paraffin wax treatment to soften and nourish hands.',
    price: 700
  },
   {
    name: 'Basic Facial',
    branchID: '67060ce163731633f8aa18ff',
    description: 'A refreshing basic facial to cleanse and rejuvenate the skin.',
    price: 800
  },
  {
    name: 'Anti-Acne Treatment',
    branchID: '67060ce163731633f8aa18ff',
    description: 'A specialized treatment designed to reduce acne and prevent breakouts.',
    price: 1200
  },
  {
    name: 'Anti-Aging Treatment',
    branchID: '67060ce163731633f8aa18ff',
    description: 'A facial designed to reduce wrinkles and promote youthful skin.',
    price: 1500
  },
  {
    name: 'Chemical Peel',
    branchID: '67060ce163731633f8aa18ff',
    description: 'A professional chemical peel to rejuvenate skin and reduce signs of aging.',
    price: 2000
  },
  {
    name: 'Microdermabrasion',
    branchID: '67060ce163731633f8aa18ff',
    description: 'A non-invasive treatment that exfoliates and removes dead skin cells.',
    price: 1800
  },
  {
    name: 'Laser Skin Resurfacing',
    branchID: '67060ce163731633f8aa18ff',
    description: 'A laser treatment to improve skin texture and remove imperfections.',
    price: 3000
  },
  {
    name: 'Whitening Facial',
    branchID: '67060ce163731633f8aa18ff',
    description: 'A facial that lightens and brightens the skin tone for a radiant look.',
    price: 1000
  },
  {
    name: 'Hydrating Facial',
    branchID: '67060ce163731633f8aa18ff',
    description: 'A deeply moisturizing facial to restore hydration to dry skin.',
    price: 1100
  },
  {
    name: 'Deep Cleansing Facial',
    branchID: '67060ce163731633f8aa18ff',
    description: 'A facial focused on deep cleaning to remove impurities and refresh the skin.',
    price: 900
  },
  {
    name: 'LED Light Therapy',
    branchID: '67060ce163731633f8aa18ff',
    description: 'A therapy that uses LED light to treat skin issues like acne and aging.',
    price: 1300
  },
  {
    name: 'Swedish Massage',
    branchID: '67060ce163731633f8aa1900',
    description: 'A relaxing Swedish massage to ease muscle tension and promote relaxation.',
    price: 1200
  },
  {
    name: 'Deep Tissue Massage',
    branchID: '67060ce163731633f8aa1900',
    description: 'A massage focusing on deeper muscle layers to relieve chronic tension.',
    price: 1400
  },
  {
    name: 'Hot Stone Massage',
    branchID: '67060ce163731633f8aa1900',
    description: 'A therapeutic massage that uses heated stones to relax muscles.',
    price: 1600
  },
  {
    name: 'Aromatherapy Massage',
    branchID: '67060ce163731633f8aa1900',
    description: 'A massage with essential oils to promote both physical and emotional healing.',
    price: 1300
  },
  {
    name: 'Thai Massage',
    branchID: '67060ce163731633f8aa1900',
    description: 'A traditional Thai massage combining stretching and deep pressure techniques.',
    price: 1500
  },
  {
    name: 'Shiatsu Massage',
    branchID: '67060ce163731633f8aa1900',
    description: 'A Japanese massage technique that applies pressure to specific body points.',
    price: 1350
  },
  {
    name: 'Reflexology',
    branchID: '67060ce163731633f8aa1900',
    description: 'A foot massage that focuses on stimulating reflex points to improve health.',
    price: 1100
  },
  {
    name: 'Sports Massage',
    branchID: '67060ce163731633f8aa1900',
    description: 'A massage aimed at preventing and healing sports injuries.',
    price: 1800
  },
  {
    name: 'Prenatal Massage',
    branchID: '67060ce163731633f8aa1900',
    description: 'A gentle massage designed for expecting mothers to alleviate pregnancy discomforts.',
    price: 1700
  },
  {
    name: 'Foot Massage',
    branchID: '67060ce163731633f8aa1900',
    description: 'A soothing massage for tired feet to relieve tension and improve circulation.',
    price: 800
  }
]) */