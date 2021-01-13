import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import items from '../minjson/itemLocations.min.json'
import keyItems from '../minjson/keyItemsLocation.min.json'
import plates from '../minjson/platesLocation.min.json'
import tms from '../minjson/tmLocations.min.json'
import Head from 'next/head'

const Items = () => {
    return (
        <>
            <Head>
                <title>Item Locations - Pokemon Renegade Platinum</title>
                <meta name="description" content="List of locations for items such as TMs, Key Items, HMs, Plates, and more!"></meta>
            </Head>
            <Layout>
                <div className="items-page-wrapper">
                    <div className="items-toc">
                        <h4>Table of Contents</h4>
                        <ul className="items-toc-links">
                            <li><Link href="/items/#items"><a>Items</a></Link></li>
                            <li><Link href="/items/#key-items"><a>Key Items</a></Link></li>
                            <li><Link href="/items/#plates"><a>Plates</a></Link></li>
                            <li><Link href="/items/#tms"><a>TM Location</a></Link></li>
                        </ul>
                    </div>
                    <h2 className="items-head" id="items">Items</h2>
                    <div className="item-group label-group">
                        <div className="item-name-label">Item</div>
                        <div className="item-location-label">Locations</div>
                    </div>
                    {items.map(({ Item, Locations }) => (
                        <div className="item-group" key={`${Item.toLowerCase().replace(" ", "-")}`}>
                            <div className="item-name">{Item}</div>
                            <div className="item-location">{Locations}</div>
                        </div>
                    ))}
                    <h2 className="items-head" id="key-items">Key Items</h2>
                    <div className="item-group label-group">
                        <div className="item-name-label">Item</div>
                        <div className="item-location-label key-item-location-label">Locations</div>
                        <div className="item-obtained-label">Obtained</div>
                    </div>
                    {keyItems.map(({ Item, Location, Obtained }) => (
                        <div className="item-group" key={`${Item.toLowerCase().replace(" ", "-")}`}>
                            <div className="item-name">{Item}</div>
                            <div className="item-location key-item-location">{Location}</div>
                            <div className="item-obtained">{Obtained}</div>
                        </div>
                    ))}
                    <h2 className="items-head" id="plates">Plates</h2>
                    <div className="item-group label-group">
                        <div className="item-name-label">Item</div>
                        <div className="item-location-label">Locations</div>
                    </div>
                    {plates.map(({ Item, MasterTrainerLocation }) => (
                        <div className="item-group" key={`${Item.toLowerCase().replace(" ", "-")}`}>
                            <div className="item-name">{Item}</div>
                            <div className="item-location">{MasterTrainerLocation}</div>
                        </div>
                    ))}
                    <h2 className="items-head" id="tms">TM Location</h2>
                    <div className="item-group label-group">
                        <div className="item-name-label tm-name-label">TM</div>
                        <div className="item-location-label tm-location-label">Locations</div>
                        <div className="item-obtained-label">Obtained</div>
                    </div>
                    {tms.map(({ TM, Location, Obtained }) => (
                        <div className="item-group" key={`${TM.toLowerCase().slice(0, 4)}`} id={`${TM.toLowerCase().slice(0, 4)}`}>
                            <div className="item-name tm-name">{TM}</div>
                            <div className="item-location tm-location">{Location}</div>
                            <div className="item-obtained">{Obtained}</div>
                        </div>
                    ))}
                </div>
            </Layout>
        </>
    )
}

export default Items
