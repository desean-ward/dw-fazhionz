import React, { useState, useEffect } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import axios from 'axios'

const API_KEY = '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'
const openai = new OpenAIApi(new Configuration({
    apiKey: API_KEY
}))


let outputText = "Testing OpenAI"

export async function createProductDescription(product) {

    const inputText =`You are a senior marketing and advertising specialist. Give me a 1 paragraph description for a ${product}. Exclude any hashtags, links, urls, and quotation marks`

    // await openai
    // .createChatCompletion({
    //     model: 'gpt-3.5-turbo',
    //     messages: [{ role: "user", content: inputText}]
    // })
    // .then(resp => {
    //     let response = resp.data.choices[0].message.content
    //     outputText = JSON.stringify(response)
    //     console.log('OpenAI: ' + outputText)
    // })
    //console.log("DESC: " + inputText)
    return outputText
}