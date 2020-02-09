import React from 'react'

export default function Repository({repositories}) {
    return (
        <div className="repositories">
           { repositories.map(p=> 
                <a key={p.id} href={p.html_url} target="_blank">
                    <div className="row border p-2 d-flex flex-row align-items-center m-2 rounded">

                        <div className="avatar col-md-2 p-auto">
                            <img  className="image" src={p.owner.avatar_url} alt="avatar"/>
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
                                    <p className="p-2 m-2 timestamp rounded"> submited {Math.round((new Date() - new Date(p.created_at))/(1000*60*60*24))} days ago by <i>{p.owner.login}</i></p>
                                    {
                                    console.log(p.created_at),
                                    console.log(Math.round((new Date() - new Date(p.created_at))/(1000*60*60*24)))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            )}
        </div>
    )
}
