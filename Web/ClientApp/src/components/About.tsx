import React from "react";

export const About = () => 
    <div className="row">
        <div className="col-md-8">
            <h2>About</h2>
            <p>
                The code you submit is not stored in any form. Therefore, please <a href="https://github.com/icsharpcode/CodeConverter/issues">report errors</a>.
            </p>
            <p>
                For larger conversions please use the <a href="https://marketplace.visualstudio.com/items?itemName=SharpDevelopTeam.CodeConverter">Code Converter Extension</a>
                for Visual Studio, which uses full project context to significantly improve conversion. It runs completely locally without calling this REST API.
            </p>
            <p>
                The code for this Web site can be found in the <a href="https://github.com/icsharpcode/CodeConverter/">Code Converter GitHub repository</a>.
                The client library for the REST API plus some smaller clients are accessible via the
                <a href="https://github.com/christophwille/roslyncodeconverterclients">clients repository</a>,
                which has a downloadable release of the <a href="https://github.com/christophwille/roslyncodeconverterclients/releases">Windows desktop client</a>.
            </p>
            <p>
                As always, help is appreciated - e.g. converters for other language combinations. Please open an issue when intending to do so.
            </p>
            <p>
                This service is brought to you by <a href="https://github.com/icsharpcode">ICSharpCode</a>.
                It was formerly part of Refactoring Essentials, and is the spiritual successor of our code converter in
                SharpDevelop, which supported up to C# 5.0.
            </p>

        </div>
    </div>
;