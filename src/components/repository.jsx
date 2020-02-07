import React from 'react'

export default function Repository({repositories}) {
    return (
        <div>
           { repositories.map(p=> 

                <div class="row border p-2 d-flex flex-row align-items-center">
                    <div style={{height:"100%"}} className="avatar col-md-4 p-auto">
                        <img style={{display:"block",width:"100px",height:"100px", margin:"auto"}} src={p.owner.avatar_url} alt="avatar"/>
                    </div>

                    <div className="information col-md-8 ">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>{p.name}</h3>
                            </div>
                            <div className="col-md-12">
                                <p>{p.description}</p>
                            </div>
                            <div className="col-md-12 d-flex flex-row bg-secondary text-white">
                                <p className="p-2 m-2"> {p.stargazers_count}</p>
                                <p className="p-2 m-2"> {p.open_issues_count}</p>
                                <p className="p-2 m-2"> submited {p.created_at} by <i>{p.owner.login}</i></p>
                            </div>
                        </div>
                    </div>
                </div>
                // <div key={p.id}>{p.id}</div> 
            )}
        </div>
    )
}

