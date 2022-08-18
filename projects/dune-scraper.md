---
title:  "Dune Scraper"
teaser: "A scraper for NFT-Transactions on the Ethereum blockchain from Dune.xyz"
published: '18. August 2022'
thumbnail: '/images/dune-analytics.png'
technology: ['Ruby', 'Node']
github: "https://github.com/LukasSonnabend/dune-scraper"
---

This Project was created to help my friend write his masters thesis. The first implementation was written in ruby and the second in node.js. The goal was to gather all transactions of non-fungible tokens on the Ethereum blockchain to later be able to calculate profits and losses on a per wallet basis.

They both use the same logic:

  1. Login to dune.xyz
  2. Open the queries page
  3. Formulate an sql query and query the dune database
  4. Wait for the data to be loaded
  5. Scrape the data from the returned table
  6. Save the data to a csv file
  7. Profit?

As the data was asynchronously loaded the scraper needed to wait for the data to be loaded. The data was presented in a table with 50 rows per page. The scraper needed to also click through every single page and of the result set.

<br/><br/>

![Screenshot](/images/dune-query-page.png)

<p class="text-center">
<small> Dune query page </small>
</p>

<br/>

The data had to be scraped in sets of 50.000 entries as querying the database for more would often result in timeouts. Using offset and limit was the optimal solution to page through the underlying dataset.

I chose ruby first because i wanted to write some ruby code to better understand the language and what it offers. As i also knew how to work with html structures in ruby and how to parse them with nokogiri I decided to write the scraper in ruby. At some point the first crawler was working, but my friend still needed the data of 4 million transactions to be able to write the thesis.

So the second implementation was written in node.js. Which turned out to be much faster then the ruby scraper. Here i decided on using Puppeteer over Selenium because research showed that Puppeteer in headless mode is much faster then Selenium.


