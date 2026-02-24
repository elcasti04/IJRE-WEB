import { google } from 'googleapis';
import catchError from '../middlewares/catchError.js';

const youtube = google.youtube({
	version: 'v3',
	auth: process.env.YOUTUBE_API_KEY, 
});

const getVideos = catchError(async (req, res) => {
	try {
		const channelResponse = await youtube.channels.list({
			part: 'id',
			forHandle: '@DavingaxOne', 
		});

		if (
			!channelResponse.data.items ||
			channelResponse.data.items.length === 0
		) {
			return res.status(404).json({ error: 'Canal no encontrado' });
		}

		const channelId = channelResponse.data.items[0].id;


		const videosResponse = await youtube.search.list({
			part: 'snippet',
			channelId: channelId,
			order: 'date',
			type: 'video',
			maxResults: 50, 
		});

		const videos = videosResponse.data.items.map((item) => ({
			title: item.snippet.title,
			videoId: item.id.videoId,
			link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
			published: item.snippet.publishedAt,
			thumbnail: item.snippet.thumbnails.default.url,
		}));

		res.json(videos);
	} catch (error) {
		console.error('Error fetching videos from YouTube API:', error.message);
		res.status(500).json({
			error:
				'No se pudo obtener los videos. Verifica la clave de API o intenta más tarde.',
		});
	}
});

export default getVideos;
