const express = require('express')
const { handleCreatProduct } = require('../controller/admin')
const { handleSignup, handleLogin } = require('../controller/auth')
const { handleAddToBasket,handleGetFromBasket, handleMinusToBasket } = require('../controller/basket')
const { handleEnterComment, handleFetchComments } = require('../controller/comment')
const { handleAddToFavorit, handleGetFromFavorite, handleIsProduct } = require('../controller/favorites')
const { handleGetProductByTag, handleGetSingleProduct } = require('../controller/products')
const { handleAddProfile, handleAddFetchMyProfile } = require('../controller/profile')

const router = express.Router()
exports.handleCreatUser=router.post('/signup',handleSignup)
exports.handleSendDataFromDb=router.post('/login',handleLogin)
exports.handleGetProduct=router.post('/admin',handleCreatProduct)
exports.handleSendProduct=router.post('/products',handleGetProductByTag)
exports.handleSendSingleProduct=router.get('/products',handleGetSingleProduct)
exports.handleAddToBasket=router.post('/basket',handleAddToBasket)
exports.handleFetchBasket=router.get('/basket',handleGetFromBasket)
exports.handleSendMinFromBasket=router.post('/basket/remove',handleMinusToBasket)
exports.handleCreatComment=router.post('/comment',handleEnterComment)
exports.handleGiveComments=router.post('/comments',handleFetchComments)
exports.handleAddProfile=router.post('/profile',handleAddProfile)
exports.handlefetchProfile=router.get('/profile',handleAddFetchMyProfile)
exports.handleAddAndRemoveFavorite=router.post('/favorite',handleAddToFavorit)
exports.handleGetFromFavorite=router.get('/favorite',handleGetFromFavorite)
exports.handleisProduct=router.post('/favorite/isProduct',handleIsProduct)


















