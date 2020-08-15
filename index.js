"use strict"
const express = require("express")
const path = require("path")
// import express from 'express'

const app = express()

app.set("port", 5000)

app.set("/src", express.static(path.resolve(__dirname, "src")))

app.listen(app.get("port"), () => {
    console.log(`server on port ${app.get("port")}`)
})