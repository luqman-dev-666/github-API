import React from 'react'

export default function Repository({repositories}) {
    return (
        <div class="repositories">
           { repositories.map(p=> 
                <a href={p.html_url} target="_blank">
                    <div key={p.id} className="row border p-2 d-flex flex-row align-items-center m-2 rounded">
            
                        <div className="avatar col-md-2 p-auto">
                            <img style={{display:"block", width:"100px", height:"100px",margin:"auto"}} className="image" src={p.owner.avatar_url} alt="avatar"/>
                        </div>

                        <div className="information col-md-10">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3>{p.name}</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>{p.description}</p>
                                </div>
                                <div className="info-row col-md-12 d-flex flex-row rounded">
                                    <p className="p-2 m-2 stars rounded"> Stars: {p.stargazers_count}</p>
                                    <p className="p-2 m-2 issues rounded"> Issues: {p.open_issues_count}</p>
                                    <p className="p-2 m-2 timestamp rounded"> submited {p.created_at} by <i>{p.owner.login}</i></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </a>
            )}
        </div>
    )
}

