export default function Home() {
    return (
        <div className='container px-4 py-5'>
            <h2 className='pb-2 border-bottom'>Next Message</h2>

            <div className='row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5'>
                <div className='d-flex flex-column align-items-start gap-2'>
                    <h3 className='fw-bold'>Left-aligned title explaining these awesome features</h3>
                    <p className='text-muted'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    <a href='#' className='btn btn-primary btn-lg'>Support Contact</a>
                </div>
                <div className='row row-cols-1 row-cols-sm-2 g-4'>
                    <div className='d-flex flex-column gap-2'>
                        <div className='feature-icon-small d-inline-flex justify-content-left fs-4 rounded-3'>

                            <button type='button' className='btn btn-primary align-items-left'>
                                <i className='bi bi-chat-dots'></i>
                            </button>

                        </div>
                        <h4 className='fw-semibold mb-0'>Journey</h4>
                        <p className='text-muted'>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>

                    <div className='d-flex flex-column gap-2'>
                        <div className='feature-icon-small d-inline-flex justify-content-left fs-4 rounded-3'>

                            <button type='button' className='btn btn-primary align-items-left'>
                                <i className='bi bi-file-earmark'></i>
                            </button>

                        </div>
                        <h4 className='fw-semibold mb-0'>Documents</h4>
                        <p className='text-muted'>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>

                    <div className='d-flex flex-column gap-2'>
                        <div className='feature-icon-small d-inline-flex justify-content-left fs-4 rounded-3'>

                            <button type='button' className='btn btn-primary align-items-left'>
                                <i className='bi bi-pie-chart'></i>
                            </button>

                        </div>
                        <h4 className='fw-semibold mb-0'>Reports</h4>
                        <p className='text-muted'>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>

                    <div className='d-flex flex-column gap-2'>
                        <div className='feature-icon-small d-inline-flex justify-content-left fs-4 rounded-3'>

                            <button type='button' className='btn btn-primary align-items-left'>
                                <i className='bi bi-gear'></i>
                            </button>

                        </div>
                        <h4 className='fw-semibold mb-0'>Settings</h4>
                        <p className='text-muted'>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}