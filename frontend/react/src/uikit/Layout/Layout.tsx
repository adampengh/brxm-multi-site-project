import React from 'react';

import { Container, Row, Column } from '.';

interface LayoutProps {
    containers?: number;
    rows?: number;
    columns?: number;
}

export const Layout = ({ containers, rows, columns }: LayoutProps) => {
    return (
        <div className='sb-layout'>
            {[...Array(containers)].map((x, i) =>
                <Container>
                    {[...Array(rows)].map((x, i) =>
                        <Row>
                            {[...Array(columns)].map((x, i) =>
                                <Column
                                    xs={12}
                                    // sm={3}
                                    md={6}
                                    // lg={4}
                                    xl={4}
                                    xxl={3}
                                >
                                    Column
                                </Column>
                            )}
                        </Row>
                    )}
                </Container>
            )}
        </div>
    );
}
