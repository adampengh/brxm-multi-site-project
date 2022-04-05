import React from 'react';

const FacetsList = ({
    facets
}: any) => {
    return (
        <>
            { facets.map((facet: any, index: number) =>
                <div key={index} style={{ margin: '0', marginBottom: '12px' }}>
                    <h4 style={{ margin: '0', marginBottom: '4px' }}>{ facet.name }</h4>
                    <div>
                        { facet.values
                            .slice()
                            .sort((a: any, b: any) => b.count - a.count)
                            .map((value: any, index: number) => {
                                return (
                                    <p style={{ margin: '0', marginBottom: '4px' }} key={index}>{ value.name } ({value.count})</p>
                                )
                            } )}
                    </div>
                </div>
            )}
        </>
    );
}

export default FacetsList;
