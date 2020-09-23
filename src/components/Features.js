import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => {
    console.log("gridItems", gridItems)
    return (
        <div className="columns is-multiline" style={{backgroundColor: 'rgba(151,158,181,0.2)'}}>
            {gridItems.map((item) => (
                <div key={item.text} className="column is-4">
                    <section className="section">
                        <div className="has-text-centered" style={{
                            backgroundColor: '#f79f24',
                            height:'100px',
                            borderRadius:'50%',
                            width:'100px',
                            margin: 'auto'}}>
                            <div
                                style={{
                                    width: '50px',
                                    verticalAlign: 'middle',
                                    display: 'inline-block',
                                    marginTop: '25%'
                                }}
                            >
                                <PreviewCompatibleImage imageInfo={item}/>
                            </div>
                        </div>
                        <p>{item.text}</p>
                    </section>
                </div>
            ))}
        </div>
    )
}

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
