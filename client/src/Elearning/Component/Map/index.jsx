import React, { Component } from 'react'
import './style.css'
export default class MapComponent extends Component {
    render() {
        return (
            <section id="contact" class="contact">
                <div >
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31351.672241065782!2d106.64064408731339!3d10.814447310571053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deb3ef536f31%3A0x8b7bb8b7c956157b!2sIndustrial%20University%20Of%20HoChiMinh%20City!5e0!3m2!1sen!2s!4v1621999845464!5m2!1sen!2s"
                        frameborder="0" allowfullscreen></iframe>
                </div>
            </section>
        )
    }
}
